import { Button, Modal } from 'antd';
import { useState } from 'react';
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataProjects = [
    {
      image: "img/svg/camera-diaphragm.svg",
      title: "ReactJS",
      shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "", // Miêu tả dự án làm gì
        technology: "", // Công nghệ sử dụng
        member: "", // Thành viên tham gia
        role: "", // Vai trò
        demo: "", // Link demo, link deploy
        github: "" // Link github
      }
    },
    {
      image: "img/svg/camera-diaphragm.svg",
      title: "ReactJS",
      shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "", // Miêu tả dự án làm gì
        technology: "", // Công nghệ sử dụng
        member: "", // Thành viên tham gia
        role: "", // Vai trò
        demo: "", // Link demo, link deploy
        github: "" // Link github
      }
    },
    {
      image: "img/svg/camera-diaphragm.svg",
      title: "ReactJS",
      shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "", // Miêu tả dự án làm gì
        technology: "", // Công nghệ sử dụng
        member: "", // Thành viên tham gia
        role: "", // Vai trò
        demo: "", // Link demo, link deploy
        github: "" // Link github
      }
    }
  ]
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {
                  dataProjects.map((item, index) => (
                    <li key={index}>
                      <div className="inner">
                        <div className="icon">
                          <img className="svg" src={item.image} alt="camera-diaphragm" />
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
