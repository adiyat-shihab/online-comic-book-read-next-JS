import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className={
        "bg-black text-white flex items-center justify-between py-2 px-4"
      }
    >
      <Image
        src={"/navbar.png"}
        width={"35"}
        height={"35"}
        alt={"navbar image"}
      />
      <h1>Navbar</h1>
      <div className={" my-2 flex w-5 items-center gap-4 rounded"}>
        <svg
          class="feather feather-search"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className={"font-bold"}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
