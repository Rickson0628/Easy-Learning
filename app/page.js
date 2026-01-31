
import Text from "@/components/Text";
import { Button } from "@/components/ui/button"
import { getCourses } from "@/queries/courses";


export default async function Home() {
  const courses = await getCourses();
  // console.log(courses)
  // console.log(courses[0]?.instructor?.socialMedia);
  //console.log(courses[0]?.modules);

  return (
    <>
      <Text/>
       
         </>
     );
}
