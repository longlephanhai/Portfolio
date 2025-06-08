import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
interface IDetail {
  description: string,
  frontend: string,
  backend: string,
  member: number,
  role: string,
  demo: string | null,
  github: string
}
interface IDataProject {
  image: JSX.Element,
  title: string,
  shortDescription: string,
  detail: IDetail
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IDataProject | null>(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(null)
  };



  const dataProjects: IDataProject[] = [
    {
      image: <FaReact
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#2bebfd'}
      />,
      title: "Bookstore Website with Social Networking",
      shortDescription: "A bookstore website combined with social networking where users can post articles, comment, and interact with each other.",
      detail: {
        description: "A bookstore website integrated with social networking features, allowing users to post articles, comment, and interact with other users.",
        frontend: "ReactJS, Redux Toolkit, Ant Design",
        backend: "NodeJS (ExpressJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://longlephanhai.vercel.app/",
        github: "https://github.com/longlephanhai/frontend"
      }
    },
    {
      image: <FaNodeJs
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#7CB701'}
      />,
      title: "Warehouse Management System",
      shortDescription: "A web application that helps users manage warehouse inventory by tracking quantities, values, and statuses of goods.",
      detail: {
        description: "A warehouse management web app designed to help users oversee goods, monitor stock levels, value, and status of inventory.",
        frontend: "Pug, Bootstrap",
        backend: "NodeJS (ExpressJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: null,
        github: "https://github.com/longlephanhai/product-manager"
      }
    },
    {
      image: <SiNestjs
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#D9224C'}
      />,
      title: "AI-Powered English Learning Website",
      shortDescription: "A website supporting English learning with AI, where users can study vocabulary, grammar, and practice listening and speaking skills.",
      detail: {
        description: "An AI-powered English learning platform allowing users to study vocabulary, grammar, and practice listening and speaking with AI assistance.",
        frontend: "ReactJS, Redux, Ant Design",
        backend: "NodeJS (NestJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://longtalk.vercel.app/",
        github: "https://github.com/longlephanhai/education_fe"
      }
    }
  ]
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? `Dự án: ${dataDetail.title}` : ""}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        {
          dataDetail && (
            <ul>
              <li>Description: {dataDetail.detail.description}</li>
              <li>Frontend: {dataDetail.detail.frontend}</li>
              <li>Backend: {dataDetail.detail.backend}</li>
              <li>Team size: {dataDetail.detail.member}</li>
              <li>Role: {dataDetail.detail.role}</li>
              <li>
                Demo:
                {
                  dataDetail.detail.demo ? (
                    <a href={dataDetail.detail.demo} target='_blank'>
                      {dataDetail.detail.demo}
                    </a>
                  ) : (
                    " No demo available"
                  )
                }
              </li>
              <li>
                Github:
                <a href={dataDetail.detail.github} target='_blank'>
                  {dataDetail.detail.github}
                </a>
              </li>
            </ul>
          )
        }
      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>Projects Completed</span>
            </div>
            <div className="list_wrap">
              <ul>
                {
                  dataProjects.map((item, index) => (
                    <li key={index}>
                      <div
                        className="inner"
                        title='Xem chi tiết'
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item)
                          setIsModalOpen(true)
                        }}
                      >
                        <div className="icon">
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div className='view_detail' style={{ padding: "5px 0" }}>
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp;
                            Detail
                          </span>
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
