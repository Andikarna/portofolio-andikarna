import { useRouter }  from 'next/router';
import { useEffect } from 'react';

export default function detailId(){

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { id } = router.query

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    if(id) return console.log("id ===", id);
  },[router.query]);

  return (
    <section>
      ini halaman detail id {id}
    </section>
  )
}