const Interests = () => {
  return (
    <>
      <div className="max-w-4xl my-4 lg:mx-auto mx-10">
        <div className="flex justify-center lg:inline">
          <h2 className="text-xl font-bold">Outside of Work</h2>
        </div>
          <div className="flex justify-center lg:inline">
            <p>Some of my interests include:</p>
          </div>
        <div className="grid grid-cols-2 gap-2 pt-5">
          <div className="p-4 border rounded-xl">
            <h3 className="font-semibold text-xl">🎮 Gaming</h3>
            <p>I play co-op games weekly to stay connected with friends and family.</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">📚 Manga</h3>
            <p>Daily reader - I love both classics and hidden gems.</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">🧗‍♂️ Bouldering</h3>
            <p>New but hooked! I go bouldering 1-2 times a month.</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">🌺 Origami</h3>
            <p>I enjoy folding - lilies are my favorite design.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interests;
