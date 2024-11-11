import { ShimmerText } from "shimmer-effects-react";

interface InstructionsI {
  instructions: string | undefined;
  loading: boolean;
}

export default function Instructions({ instructions, loading }: InstructionsI) {
  return (
    <div className="shadow-lg border border-slate-200 rounded-lg px-6 md:px-8 py-3">
      {loading ? (
        <ShimmerText line={10} gap={10} mode="light" />
      ) : (
        instructions && (
          <>
            <h2 className="text-orange-950 font-semibold text-lg">
              Instructions
            </h2>
            <ul className="list-disc mt-2 pl-3">
              {instructions.split(".").map((instruction) => {
                if (instruction) {
                  return <li>{instruction}</li>;
                }
              })}
            </ul>
          </>
        )
      )}
    </div>
  );
}
