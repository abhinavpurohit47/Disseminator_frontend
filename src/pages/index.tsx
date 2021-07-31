
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">
        Share your File with The Disseminator!!
      </h1>
      <div className="flex flex-col items-center justify-center bg-gray-700 shadow-xl w-96 rounded-xl">
        dropzone
        {/* render file */}
        {/* upload button */}
      </div>
    </div>
  );
}
