import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ name, id, tag, about }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <ul className="card__taglist">
        <Tag key={id} roles={tag[0]} />
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
