import React, { useState, useMemo } from "react";
import { Search as SearchIcon } from "lucide-react";
import "../styles/CurrentIssue.css";

function CurrentIssue() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const publications = [
    {
      id: 1,
      title: "The Future of Digital Privacy: A Legal Framework",
      authors: ["Dr. Evelyn Reed", "John Carter, Esq."],
      date: "2024-10-15",
      category: "Technology Law",
      abstract:
        "This paper explores the evolving landscape of digital privacy laws and proposes a new comprehensive framework to protect consumer data in the age of AI and IoT.",
      downloads: 245,
    },
    {
      id: 2,
      title: "Corporate Responsibility in Environmental Law",
      authors: ["Dr. Samuel Greene"],
      date: "2024-09-22",
      category: "Environmental Law",
      abstract:
        "An in-depth analysis of recent landmark cases that are redefining corporate accountability for environmental damage and sustainability practices.",
      downloads: 189,
    },
    {
      id: 3,
      title: "Intellectual Property Rights in the Metaverse",
      authors: ["Maria Garcia, Esq.", "Leo Chen"],
      date: "2024-09-05",
      category: "Intellectual Property",
      abstract:
        "Examining the unique challenges and opportunities for protecting intellectual property within decentralized virtual worlds and the metaverse.",
      downloads: 312,
    },
    {
      id: 4,
      title: "Navigating International Trade Disputes",
      authors: ["Thomas Klein", "Aisha Khan, Esq."],
      date: "2024-08-18",
      category: "International Law",
      abstract:
        "A strategic guide for corporations on navigating the complexities of international trade law, sanctions, and dispute resolution mechanisms.",
      downloads: 156,
    },
    {
      id: 5,
      title: "The Gig Economy: Labor Law and Worker Classification",
      authors: ["Dr. Evelyn Reed"],
      date: "2024-07-30",
      category: "Labor Law",
      abstract:
        "This research paper investigates the legal battles surrounding worker classification in the gig economy and its implications for the future of labor.",
      downloads: 278,
    },
    {
      id: 6,
      title: "AI in the Courtroom: A Study on Algorithmic Bias",
      authors: ["John Carter, Esq."],
      date: "2024-06-12",
      category: "Technology Law",
      abstract:
        "Investigating the potential for algorithmic bias in AI tools used for sentencing and parole decisions, and the legal safeguards required.",
      downloads: 423,
    },
  ];

  const categories = useMemo(
    () => ["All", ...new Set(publications.map((p) => p.category))],
    [publications]
  );

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some((a) =>
          a.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || pub.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, publications]);

  return (
    <div className="currentIssue">
      <div className="issueHeader">
        <h2 className="title">Current Issue</h2>
        <p className="subtitle">
          Browse our collection of legal research and scholarly articles
        </p>
      </div>

      <div className="controlsSection">
        <div className="searchBox">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
        </div>

        <div className="filterButtons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filterBtn ${
                selectedCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="resultsInfo">
        Showing <strong>{filteredPublications.length}</strong> of{" "}
        <strong>{publications.length}</strong> publications
      </div>

      {filteredPublications.length > 0 ? (
        <div className="publicationsGrid">
          {filteredPublications.map((pub) => (
            <article key={pub.id} className="publicationCard">
              <div className="cardHeader">
                <span className="category">{pub.category}</span>
                <span className="downloads">📥 {pub.downloads}</span>
              </div>

              <h3 className="cardTitle">{pub.title}</h3>
              <p className="authors">{pub.authors.join(", ")}</p>
              <p className="abstract">{pub.abstract}</p>

              <div className="cardFooter">
                <span className="date">
                  {new Date(pub.date).toLocaleDateString()}
                </span>
                <button className="readMore">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="noResults">
          <span className="noResultsIcon">🔍</span>
          <h3>No Publications Found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}

export default CurrentIssue;
