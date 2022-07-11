import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useApi } from "../hooks/useApi";
import { useToken } from "../hooks/useToken";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Auth from "../components/Auth"
function TData({ data }) {
  return (
    <td className="p-2 border-2 border-secondary bg-white text-secondary">
      {data}
    </td>
  );
}
function THeading({ data, onClick }) {
  return (
    <th className="p-2 border-2 border-secondary bg-secondary text-primary" onClick={onClick}>
      {data}
    </th>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const api = useApi();
  const token = useToken();

  const getProjects = useCallback(async () => {
    const projects = await axios({
      method: "get",
      url: `${api}/projects`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTimeout(() => {
      setProjects(projects.data);
      setLoading(false);
    }, 2000);
  }, [api, token]);

  async function deleteProject(id) {
    await axios({
      method: "delete",
      url: `${api}/projects/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDeleted(!deleted);
  }

  async function openProject(id) {
    await axios({
      method: "get",
      url: `${api}/projects/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      console.log(res.data);
      //open pussy for segs and the file ne
    });
  }

  useEffect(() => {
    getProjects();
  }, [getProjects, deleted, token]);

  useEffect(() => {
  }, [refresh]);

  function sortByName() {
    projects.reverse()
    setProjects(projects)
    setRefresh(!refresh)
    console.log(projects)
  }


  if (projects.length > 0) {
    return (
      <div className="bg-primary ">
        <div className="h-16"></div>
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <Loading loading={loading}>
            <table className="table-auto rounded-2">
              <thead className="">
                <tr>
                  <THeading data={"Id"} />
                  <THeading data={"Name"} onClick={() => sortByName()} />
                  <THeading data={"Description"} />
                  <THeading data={"Date created"} />
                  <THeading data={"Date modified"} />
                  <THeading />
                  <THeading />
                </tr>
              </thead>

              <tbody>
                {projects?.map((proj) => (
                  <tr key={proj.id}>
                    <TData data={proj.id} />
                    <TData data={proj.name} />
                    <TData data={proj.description} />
                    <TData data={proj.createdAt} />
                    <TData data={proj.updatedAt} />
                    <TData data={<Button text="DELETE" onClick={() => deleteProject(proj.id)} />} />
                    <TData data={<Button text="OPEN" onClick={() => openProject(proj.id)} />} />
                  </tr>
                ))}
              </tbody>
            </table>
          </Loading>
        </div>
      </div>
    );
  }

  else {
    return (
      <>
        <div className="flex justify-center items-center flex-col h-screen bg-primary">
          <span className="text-3xl text-secondary">It looks like you don't have projects yet!</span>
          <span className="text-3xl text-secondary">You can make your first here:</span>
          <Auth>
            <Link
              to={"/create"}
              className="m-4 p-2 text-lg text-primary bg-secondary outline outline-2 outline-secondary rounded-md hover:bg-secondary/70"
            >
              Create Web Project
            </Link>
          </Auth>
        </div>
      </>
    );   
  }

}
