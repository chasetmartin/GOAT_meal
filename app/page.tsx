import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/images/Mountain2.svg"
        alt="Mountain"
        width={1920}
        height={1080}
      />
    </main>
  )
}
