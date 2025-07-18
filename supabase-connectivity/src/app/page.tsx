
import { supabase } from '../../lib/supabase/supabase'
const page = async () => {

  // Fetch items from the "items" table

  const { data: users, error } = await supabase.auth.getUser();
  
  if(error){
    console.log(error);
    return <div className='flex items-center justify-center h-screen'>
      <span className='text-red-500 '>{error.message}</span>
    </div>
  }else{
    console.log(users);
  }
  return (
    <div>

        <h2 className='text-xl font-bold'>{}</h2>
    </div>
  )
}

export default page