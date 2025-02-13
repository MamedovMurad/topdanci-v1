"use client"
import LabelHeader from '@/components/label'
import { getFavProducts } from '@/helper/api/products'
import React, { Suspense, useEffect, useState } from 'react'
import ProductsContainer from './product'
import PaginationUI from '@/components/ui/pagination'
import { useSearchParams } from 'next/navigation'

type Props = {}

const FavoritesPageClient = (props: Props) => {
    const [products, setProducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const searchParams = useSearchParams();
    const page = searchParams.get("page");

    useEffect(() => {
        getFavProducts(page || "")
            .then((data) => {
                setProducts(data?.data?.data)
                setpageCount(data?.data?.pagination?.total / 12)
            })
    }, [page]);

    return (
        <main>
            <LabelHeader title="Seçilmişlər" />


            <section >
                <div className="container mx-auto lg:mt-5  ">

                    <div className=" mb-20 lg:mt-5   ">


                        <ProductsContainer list={products} />


                        <div className="mt-12">
                            <PaginationUI
                                isAuth
                                pageCount={pageCount}


                                start={(page ? Number(page) - 1 : 0)}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <FavoritesPageClient />
        </Suspense>
    );
}