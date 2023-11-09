import { About, Banner, Blog, Booking, Destination, Gallary, Guides, Package, Service, Testimonial } from '@/containers'

export default function Home() {
  return (
    <>
      <Banner />
      <Booking />
      <About />
      <Destination />
      <Service />
      <Package />
      <Gallary />
      <Guides />
      <Testimonial />
      <Blog />
    </>
  )
}
