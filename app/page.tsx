import CategoryButton from "@components/CategoryButton/CategoryButton";

import bedroomSVG from '@assets/icons/bedroom.svg';
import livingroomSVG from '@assets/icons/livingroom.svg';
import kitchenSVG from '@assets/icons/kitchen.svg';
import bathroomSVG from '@assets/icons/bathroom.svg';

export default function Home() {
  return (
    <main>
      <h2>NextJS Course</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus laborum ipsum aliquam nihil, fugit nam illum fugiat
        accusantium asperiores debitis culpa doloribus laudantium
        officiis eaque tempore tenetur eius delectus quaerat!
      </p>

      <div className="flex flex-wrap justify-center w-100">
        <CategoryButton image={livingroomSVG} title='Dormitorio' />
        <CategoryButton image={bedroomSVG} title='Sala' />
        <CategoryButton image={kitchenSVG} title='Cocina' />
        <CategoryButton image={bathroomSVG} title='Dormitorio' />
      </div>
    </main>
  );
}
