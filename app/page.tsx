import { TopBar, Container, Filters, Header, Title } from '@/components/shared';
import { Pagination } from '@/components/shared/pagination';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
    return (
        <main className='min-h-screen bg-white rounded-3xl'>
            <Header />

            <Container className='mt-5'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>

            <TopBar />

            <Container className='grid grid-cols-6 gap-2 my-10'>
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496'
                />
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640'
                />
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020'
                />
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496'
                />
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640'
                />
                <img
                    className='rounded-md'
                    height={250}
                    width={200}
                    src='https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020'
                />
            </Container>

            <Container className='pb-14'>
                <div className='flex gap-[60px]'>
                    <div className='w-[250px]'>
                        <Filters />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList
                                categoryId={1}
                                title='Пиццы'
                                items={[1, 2, 3, 4, 5]}
                            />
                            <ProductsGroupList
                                categoryId={2}
                                title='Комбо'
                                items={[1, 2, 3, 4, 5]}
                            />
                        </div>

                        <div className='flex items-center gap-6 mt-12'>
                            <Pagination pageCount={3} />
                            <span className='text-sm text-gray-400'>5 из 65</span>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}