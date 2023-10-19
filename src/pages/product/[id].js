import Link from "next/link";

export default function productDetail({ data }) {

  return (
    <section>
      <label className="title flex justify-center py-10 text-3xl font-sans font-medium text-dark">Produck Detail</label>
      <div className="flex justify-center">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col justify-center">
          <Link href="#">
            <img class="p-8 rounded-t-lg" src={data.image} alt={data.title} />
          </Link>
          <div class="px-5 pb-5">
            <Link href="#">
              <h5 class="text-xl font-semibold tracking-tight text-dark dark:text-white">{data.title}</h5>
            </Link>
            <div class="flex items-center mt-2.5 mb-5">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{data.category}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{data.rating.rate}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{data.rating.count}</span>

            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
              <Link href="#" class="text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-green-600">Add to cart</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Link href="/" className="w-fit justify-center bg-red-500 py-2 px-5 rounded-xl text-white hover:bg-gray-900">Kembali</Link>
      </div>

    </section>

  )
}

export async function getServerSideProps(context) {

  const { query: { id } } = context;
  const respones = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await respones.json();

  return {
    props: { data }
  }
}