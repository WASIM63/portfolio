import { FaArrowRight, FaTrophy } from "react-icons/fa";
import { gallery as galleryData } from "@/contents/gallery";
import Template1 from "../components/galleryFormats/template1";
import { Gallery as GalleryType } from "@/types";

export default function GalleryPage() {
  const sortedGallery = [...galleryData].sort(
    (a: GalleryType, b: GalleryType) =>
      new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );

  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="page-shell py-20 sm:py-28">
          <p className="eyebrow"><FaTrophy /> Achievements &amp; moments</p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            A visual record of <span className="text-primary">learning and milestones.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Highlights from competitions, events, and experiences that have shaped my journey as a developer. Images and videos can be added to each entry from one central data file.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><FaTrophy className="text-primary" /> {galleryData.length} moments</span>
            <span className="inline-flex items-center gap-2"><FaArrowRight className="text-primary" /> Scroll to explore</span>
          </div>
        </div>
      </section>

      <div className="page-shell py-12 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow">The archive</p>
            <h2 className="section-title">Moments worth remembering.</h2>
          </div>
          <p className="hidden text-sm text-[var(--muted)] sm:block">Images, videos, and stories</p>
        </div>
        <div className="space-y-8">
          {sortedGallery.map((moment, index) => <Template1 moment={moment} index={index} key={`${moment.title}-${index}`} />)}
        </div>
      </div>
    </main>
  );
}
