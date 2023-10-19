import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function slugId() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!router.query.slug) return
    const [slugName, idName] = router.query.slug;
    console.log("slugName , idName", slugName, idName);
  }, [router.query.slug])

  return (
    <section>
      ini halaman detail id
    </section>
  )
}