interface IconDesktopProps {
  title: string;
  img: string;
  fn?: () => void;
}

export function IconDesktop({ img, title, fn }: IconDesktopProps) {
  function dobleClicks() {
    if (fn) fn();

    return;
  }

  return (
    <div
      className="w-[140px] min-h-[80px] cursor-default inline-flex gap-4 flex-col hover:border p-1 hover:border-gray-50 hover:bg-gray-50 hover:bg-opacity-5 hover:border-opacity-5"
      onDoubleClick={dobleClicks}
    >
      <div className="inline-flex flex-col items-center justify-center">
        <img src={img} className="w-12" />

        <p
          className="text-white font-light inline-block text-center"
          style={{ textShadow: '1px 1px 3px black' }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
