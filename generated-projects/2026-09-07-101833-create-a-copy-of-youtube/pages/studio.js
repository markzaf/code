import Header from "../components/Header";
import CreatorStudio from "../components/CreatorStudio";

export default function Studio({ toggleDark, dark }) {
  return (
    <>
      <Header toggleDark={toggleDark} dark={dark} />
      <main className="px-4 md:px-0 py-4">
        <CreatorStudio />
      </main>
    </>
  )
}
