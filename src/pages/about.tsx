import { useGetPathToSample } from "@/api/generated/techCurriculumOpenAPI";

export default function About() {
  const { data, error, isPending } = useGetPathToSample();

  if (isPending) return <div>Pending...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.id || "No id"}
      {data.name || "No name"}
    </div>
  );
}
