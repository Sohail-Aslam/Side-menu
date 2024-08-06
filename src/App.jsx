import { Children, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

function megaMenu() {


  const megaMenuItems = [
    {
      id: '1',
      category: "Electronics",
      subCategories: [
        {
          title: "Mobile Phones",
          items: ["Smartphones", "Feature Phones", "Refurbished Phones"]
        },
        {
          title: "Laptops",
          items: ["Gaming Laptops", "Business Laptops", "2-in-1 Laptops"]
        },
        {
          title: "Cameras",
          items: ["DSLR", "Mirrorless", "Action Cameras"]
        }
      ]
    },
    {
      id: '2',

      category: "Fashion",
      subCategories: [
        {
          title: "Men",
          items: ["T-Shirts", "Jeans", "Shoes"]
        },
        {
          title: "Women",
          items: ["Dresses", "Handbags", "Jewelry"]
        },
        {
          title: "Kids",
          items: ["Tops", "Bottoms", "Footwear"]
        }
      ]
    },
    {
      id: '3',

      category: "Home & Kitchen",
      subCategories: [
        {
          title: "Furniture",
          items: ["Sofas", "Beds", "Dining Tables"]
        },
        {
          title: "Home Decor",
          items: ["Wall Art", "Lighting", "Rugs"]
        },
        {
          title: "Kitchen Appliances",
          items: ["Microwaves", "Refrigerators", "Dishwashers"]
        }
      ]
    },
    {
      id: '4',
      category: "Sports & Outdoors",
      subCategories: [
        {
          title: "Exercise & Fitness",
          items: ["Yoga Mats", "Treadmills", "Dumbbells"]
        },
        {
          title: "Outdoor Recreation",
          items: ["Camping Gear", "Cycling", "Fishing"]
        },
        {
          title: "Team Sports",
          items: ["Soccer", "Basketball", "Baseball"]
        }
      ]
    }
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);


  const categories = megaMenuItems.map(item => item.category);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: 'fitcontent', backgroundColor: '#303041', gap: '40px', flexWrap: 'nowrap' }}>
        <div className="logo">Mega Menu</div>
        <ul style={{ display: 'flex', gap: '35px', fontSize: '16px', listStyleType: 'none' }}>
          {categories.map((category, index) => (
            <li 
              key={index}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {hoveredCategory && (
        <div className="mega"  onMouseEnter={() => handleMouseEnter(hoveredCategory)}
        onMouseLeave={handleMouseLeave}>
          <ul className='menu'>
            {megaMenuItems.find(item => item.category === hoveredCategory).subCategories.map((subCategory, subIndex) => (
              <li  key={subIndex} style={{ fontSize: '20px', fontWeight: '500', color: 'white', padding: '10px' }}>
                {subCategory.title}
                <ul style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '20px', padding: "15px" }}>
                  {subCategory.items.map((item, index) => (
                    <li key={index} style={{ fontSize: '17px', fontWeight: '300', color: 'white', listStyleType: 'none', gap: '70px' }}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default megaMenu