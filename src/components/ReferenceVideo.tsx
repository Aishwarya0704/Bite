import { ShimmerDiv } from "shimmer-effects-react";

interface ReferenceVideoI {
  youtubeVideo: string | undefined;
  loading: boolean;
}

export default function ReferenceVideo({
  youtubeVideo,
  loading,
}: ReferenceVideoI) {
  return (
    <div className="shadow-lg border border-slate-200 rounded-lg px-6 md:px-8 py-5 mt-8">
      <h2 className="text-orange-950 font-semibold text-lg">Reference Video</h2>
      <ShimmerDiv
        mode="light"
        height={"384px"}
        width={"100%"}
        loading={loading}
      >
        {youtubeVideo ? (
          <iframe
            className="mt-4 w-full h-96 rounded-lg"
            src={`${youtubeVideo.replace(
              "watch?v=",
              "embed/"
            )}?autoplay=1&rel=0&controls=0&showinfo=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ) : (
          <></>
        )}
      </ShimmerDiv>
    </div>
  );
}
