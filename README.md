# AI-Powered Stock Prediction Platform

This repository is structured as a MERN monorepo integrated with a Python FastAPI Machine Learning Inference engine.

## Monorepo Architecture

```
ai-stock-predictor/
├── backend/           # Node.js + Express API Middleware Application
├── frontend/          # React.js Client Application (Vite Toolchain)
└── ai-engine/         # Isolated Python Machine Learning Inference Engine
```

## Running the Platform

### 1. Requirements
- Node.js (v18+)
- npm (v9+)
- Python (3.10+)
- MongoDB (running locally or a remote MongoDB Atlas URI)

### 2. Quick Start

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### AI Engine Setup
```bash
cd ai-engine
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```
