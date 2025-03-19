import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import {
  addcategory,
  deleteCategory,
  getAllCategories,
  getVideodetailsById,
} from "../services/allApi";

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);

  const [CategoryName, setCategoryName] = useState("");

  const handleAddCategory = async () => {
    if (!CategoryName) {
      toast.warning("Please fill the Category name");
    } else {
      const body = {
        categoryName: CategoryName,
        allVideos: [],
      };
      const response = await addcategory(body);
      console.log("Category Response");
      console.log(response);
      if (response.status === 201) {
        toast.success(`${CategoryName} Successfully saved`);
        getCategories();
      }

      handleClose();
    }
  };
  const getCategories = async () => {
    const response = await getAllCategories();
    console.log("categories");
    console.log(response);
    const { data } = response;
    setCategories(data);
  };
  const DeleteCategory = async (id) => {
    const response = await deleteCategory(id);

    if (response.status === 200) {
      toast.success(` ${CategoryName} deleted successfully`);
      getCategories();
    }
  };

  const dragOver = (e) => {
    e.preventDefault(e);
  };
  const videoDropped = async (e, id) => {
    console.log(`${id} dropped insdie Category`);
    const vId = e.dataTransfer.getData("videoId");
    console.log(`video id with ${vId} cis dropped in category with id ${id}`);
    const result = await getVideodetailsById(vId);
    console.log(result);
    const { data } = result;

    let selectedCategories = categories?.find((item) => item.id == id);
    console.log("selectedCategories");
    console.log(selectedCategories);
    selectedCategories.allVideos.push(data)
    console.log('final category');
    console.log(selectedCategories);
    
    
    

  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div>
        <button className="btn btn-warning  " onClick={handleShow}>
          Add New Category
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title className="textstyle">
            <i class="fa-solid fa-list text-warning me-3"></i>Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="textstyle fw-bolder">Please Fill The Form</p>
          <Form className="border border-secondary p-3 rounded">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Category Name  "
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            ADD{" "}
          </Button>
        </Modal.Footer>
      </Modal>

      {categories?.map((item) => (
        <div
          className="border border-secondary rounded p-3 mt-2"
          droppable
          onDragOver={(e) => dragOver(e)}
          onDrop={(e) => videoDropped(e, item.id)}
        >
          <div className="d-flex justify-content-between align-items-center m-2">
            <h6>{item.categoryName}</h6>
            <button
              className="btn btn-danger"
              onClick={() => DeleteCategory(item.id)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;
