import { useRouter } from 'next/router'

const PodOferta = () => {
    const router = useRouter()
    const { slug } = router.query

    return <p>{slug}</p>
}

export default PodOferta