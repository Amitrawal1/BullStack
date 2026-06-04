import os
import pickle
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def generate_mock_ohlcv(base_price=2450.0, periods=60):
    """
    Generate mock historical daily stock data for model fitting.
    """
    np.random.seed(42)
    dates = pd.date_range(end=pd.Timestamp.today(), periods=periods, freq='D')
    
    # Generate prices using simulated geometric Brownian motion
    prices = [base_price]
    for _ in range(periods - 1):
        fluctuation = np.random.normal(0.001, 0.012)
        prices.append(prices[-1] * (1 + fluctuation))
        
    df = pd.DataFrame({
        'Date': dates,
        'Close': prices,
        'Open': [p * (1 + np.random.normal(0, 0.005)) for p in prices],
        'High': [p * (1 + abs(np.random.normal(0.005, 0.003))) for p in prices],
        'Low': [p * (1 - abs(np.random.normal(0.005, 0.003))) for p in prices],
        'Volume': np.random.randint(100000, 1000000, size=periods)
      })
    df.set_index('Date', inplace=True)
    return df

def train_and_save_model():
    print("[Trainer] Initializing stock model pipeline...")
    
    # 1. Fetch data
    df = generate_mock_ohlcv()
    
    # 2. Engineer rolling features
    df['MA_5'] = df['Close'].rolling(window=5).mean()
    df['MA_15'] = df['Close'].rolling(window=15).mean()
    df['Volatility'] = df['Close'].rolling(window=10).std()
    
    # Drop rows with NaN caused by rolling calculations
    df.dropna(inplace=True)
    
    # Target: Predict close price for the NEXT day
    df['Target'] = df['Close'].shift(-1)
    
    # Drop last row since it doesn't have a future target
    features_df = df.iloc[:-1]
    
    # Define features and label matrices
    X = features_df[['Close', 'MA_5', 'MA_15', 'Volatility']].values
    y = features_df['Target'].values
    
    # 3. Model Training
    model = LinearRegression()
    model.fit(X, y)
    print(f"[Trainer] Model fitting complete. R^2 Score: {model.score(X, y):.4f}")
    
    # Create parent models directory if it doesn't exist
    os.makedirs(os.path.join(os.path.dirname(__file__), '../models'), exist_ok=True)
    
    # 4. Save serialized weights
    model_path = os.path.join(os.path.dirname(__file__), '../models/trained_predictor.pkl')
    with open(model_path, 'wb') as f:
        pickle.dump(model, f)
        
    print(f"[Trainer] Serialized scikit-learn model saved successfully to: {model_path}")

if __name__ == "__main__":
    train_and_save_model()
