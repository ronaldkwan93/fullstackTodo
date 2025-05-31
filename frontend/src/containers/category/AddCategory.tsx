import { useRef } from "react";
import { addCategory } from "../../services/categories";

const AddCategory = () => {
    const titleRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            id: null,
            title: titleRef.current?.value || ''
        }
        console.log(formData);
        addCategory(formData);
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="type category here.."
        ref={titleRef} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddCategory;
