import { NextRequest } from 'next/server'
import data from '../data.json'
import { z } from 'zod'

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 9000))

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
