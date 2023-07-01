import Category from "./Category"

const Categories = () => {
  return (
    <section id="categories" className="container mt-8">
        <h1 className="font-semibold">Categories</h1>
        <div className="flex items-center space-x-5 mt-4 overflow-x-auto scrollbar-hide">
            <Category />
        </div>
    </section>
  )
}

export default Categories