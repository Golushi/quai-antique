
export const Header = () => {
    return (
        <nav id="header" className="container flex justify-between px-4 py-8 mx-auto bg-black opacity-80">
  <div>
    <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
  </div>
  <div className="hidden space-x-8 lg:flex">
    <a href="#">Menu 1</a>
    <a href="#">Menu 2</a>
    <a href="#">Menu 3</a>
    <a href="#">Menu 4</a>
  </div>
  <div className="flex lg:hidden">
    <div className="space-y-2">
      <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
      <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
      <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
    </div>
  </div>
</nav>
    )
}