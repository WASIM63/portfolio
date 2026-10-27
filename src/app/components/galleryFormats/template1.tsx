import { FaCalendar, FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";
import { Gallery } from "@/types";
import Image from "next/image";

const GalleryEntry = ({ moment, index }: { moment?: Gallery; index: number }) => {
  if (!moment) return null;

  return (
    <article className="surface-card overflow-hidden">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-[var(--surface-muted)] p-6 sm:p-8">
          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {moment.category ?? "Achievement"}
              </span>
              <span className="text-sm font-medium text-[var(--muted)]">0{index + 1}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{moment.title || "Achievement"}</h2>
            {moment.highlight && <p className="mt-4 text-lg font-medium leading-7 text-primary">{moment.highlight}</p>}
            <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              {moment.date && <p className="flex items-center gap-2"><FaCalendar className="text-primary" />{moment.date.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>}
              {moment.location && <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" />{moment.location}</p>}
            </div>
          </div>
          {moment.description && <div className="mt-8 space-y-3 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)]">{moment.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
        </div>

        <div className="bg-[var(--background)] p-3 sm:p-5">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3">
            {moment.photos.map((photo, photoIndex) => (
              <div key={`${photo.img}-${photoIndex}`} className={`group relative overflow-hidden rounded-xl ${photoIndex === 0 ? "col-span-2 row-span-2" : ""}`}>
                <Image src={`/gallery/${photo.img}`} alt={photo.description ?? `${moment.title} image ${photoIndex + 1}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
            {moment.videos?.map((video) => (
              <div key={video.src} className="relative col-span-2 row-span-2 overflow-hidden rounded-xl bg-slate-950">
                <video controls preload="metadata" poster={video.poster ? `/gallery/${video.poster}` : undefined} className="h-full w-full object-cover" aria-label={video.title ?? `${moment.title} video`}>
                  <source src={video.src} />
                  Your browser does not support video playback.
                </video>
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white"><FaPlayCircle /> Video</span>
              </div>
            ))}
            {moment.photos.length === 0 && !moment.videos?.length && <div className="col-span-full flex min-h-60 items-center justify-center rounded-xl border border-dashed border-[var(--border)] text-sm text-[var(--muted)]">Add images or videos to this achievement</div>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GalleryEntry;
