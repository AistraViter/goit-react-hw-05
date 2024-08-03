import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

function SearchForm() {
  const initialValues = {
    topic: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.searchForm}>
            <Field type="text" name="topic" placeholder="Search movies..." />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}

export default SearchForm;
