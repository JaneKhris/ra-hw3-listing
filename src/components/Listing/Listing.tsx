import { Props, TDataExtended, TDataExtendedArray } from "../../types";

export default function Listing(props: Props) {
  const dataActive: TDataExtendedArray = props.dataArray.filter((item) => item.state == "active");
  console.log(dataActive)
  dataActive.forEach((element:TDataExtended)=> {
    if (element.currency_code === 'USD') {
      element.currency = '$'
    } else if (element.currency_code === 'EUR') {
      element.currency = '€'
    } else {
      element.currency = `${element.currency_code} `
    }
    
    if (element.quantity) {
      if (element.quantity < 11) {
        element.level = 'level-low'
      } else if (element.quantity < 21 ) {
        element.level = 'level-medium'
      } else {
        element.level = 'level-high'
      }
    }

    if (element.title && element.title.length > 50) {
      element.title = element.title.slice(0,50) + '...'
    }
  });

  return (
    <div className="item-list">
      {dataActive.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              {item.MainImage &&
                <img src={item.MainImage.url_570xN} />
              }
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.currency}{Number(item.price).toFixed(2)}</p>
            <p className={`item-quantity ${item.level}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
}
