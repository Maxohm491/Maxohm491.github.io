import React from 'react';

function GameEngine() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2">BAMN Engine</h1>
        <p className="text-lg text-gray-600">A 2D Game Engine built in Dlang</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/7RJcTSc5v3I?si=65ywoQfc_eKjagEU"
            title="YouTube video player"
            className="w-full h-full rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/images/screenshot1.png" alt="Gameplay" className="rounded shadow" />
          <img src="/images/screenshot2.png" alt="Editor" className="rounded shadow" />
          <img src="/images/screenshot3.png" alt="Crazy Level!" className="rounded shadow" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Engine Architecture Diagram</h2>
        <img src="/images/engine_diagram.png" alt="Engine Diagram" className="w-full rounded shadow" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Documentation</h2>
        <a href="/function-docs.html" target="_blank" className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
          View Documentation
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Source Code</h2>
        <a
          href="https://github.com/Spring25BuildingGameEngines/finalproject-bamn-enine"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
        >
          View on GitHub
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Linux Build</h2>
        <a
          href="/downloads/LinuxBuild.zip"
          download
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500"
        >
          Download for Linux
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Post-Mortem</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            With an extra eight-week window, we'd start by merging the level editor directly into the runtime—turning it into
            just another scene driven by the same engine loop. This wouldn't affect the user too much but it'd be really nifty.
            Next, we'd refactor the tilemap module so grid dimensions are set at creation time rather than hard-coded. That
            change unlocks non-square tiles, oddball resolutions, and easier experimentation without touching core collision logic.
          </p>
          <p>
            Time-wise, we'd spend roughly four weeks on the editor-as-scene integration: UI rework, live asset serialization,
            and hot-reloading. Two weeks would go to the flexible-grid rewrite, including updates to path-finding and physics.
            The remaining two weeks would deliver a minimal scene browser that lets teams create, organize, and save any number
            of levels in user-chosen folders, plus a small suite of integration tests to keep the new save/load path stable.
          </p>
          <p>
            We wouldn't swap out the tech stack. D, SDL bindings, and the GameObject/Component framework all kept iteration
            quick and predictable, so the focus is refining the workflow rather than replacing foundations.
          </p>
        </div>
      </section>
    </main>
  );
}

export default GameEngine;
