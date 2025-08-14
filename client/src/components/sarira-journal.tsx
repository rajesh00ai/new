export default function SariraJournal() {
  const articles = [
    {
      id: 1,
      title: "The Unsung Heroes of Tamil Kitchens: The Humble Fig",
      excerpt: "The Fig (Athipazham) used in a cornerstone of merriness in Tamil households. We explore its historical importance in Tamil culture and..."
    },
    {
      id: 2,
      title: "Postpartum Care, the Tamil Way: A Guide for New Mothers",
      excerpt: "Bringing a child into the world comes with great joyful accompanied, and requires care as nourishment. Learn how traditional farm postpartum care focus..."
    },
    {
      id: 3,
      title: "Why Your Gut Is Your Second Brain: A Tamil Perspective",
      excerpt: "Siddha medicine reveals a strong connection between health in the gut and overall well-being. One that the intestinal gut is the controller on being well..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            SARIRA Journal – Where Food Meets Philosophy
          </h2>
          <p className="text-lg text-gray-600">
            Discover the stories behind our ingredients and traditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-brand-green mb-4 leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <button className="text-brand-orange hover:text-brand-green transition-colors font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-brand-orange text-brand-orange px-8 py-3 rounded-full font-medium hover:bg-brand-orange hover:text-white transition-all">
            Explore Our Journal
          </button>
        </div>
      </div>
    </section>
  );
}