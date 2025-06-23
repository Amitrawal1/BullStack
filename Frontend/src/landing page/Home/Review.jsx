export default function Review() {
  const reviews = [
    {
      title: "Amazing Support!",
      text: "The team was extremely responsive and solved my issue within hours. The platform is smooth and the support articles are very helpful. Highly recommend!",
    },
    {
      title: "Seamless Experience",
      text: "Opening my account and activating all segments was a breeze. Clear instructions and quick updates. Great job by the support staff!",
    },
    {
      title: "Best Customer Service",
      text: "Faced a small problem with order rejection, but the support team guided me perfectly. Ticket resolution was fast. Very satisfied.",
    },
    {
      title: "Great Articles",
      text: "Every time I reach out for help, the response is super quick and polite. The knowledge base articles are very detailed too. Thank you!",
    },
    {
      title: "Fantastic Platform",
      text: "Overall, great service. A little more information on margin requirements would help new users like me. Otherwise, fantastic platform!",
    },
    {
      title: "Good but Can Improve",
      text: "Faced a small problem with order rejection, but the support team guided me perfectly. Ticket resolution was fast. Very satisfied.",
    },
  ];

  return (
    <section className="bg-purple-100 py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
