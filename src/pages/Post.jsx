import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };
    // console.log("userdata", userData);
    // console.log("post", post);
    return post ? (
        

            <Container>
                <div className="py-8 flex flex-row justify-around items-stretch">
                <div className=" flex justify-center items-center mb-4 relative rounded-xl p-2 border">
                    {post.featuredImage && ( 
                        <img 
                            src={appwriteService.getFilePreview(post.featuredImage)} 
                            alt={post.title} 
                            className="rounded-xl max-h-screen max-w-full object-cover" 
                        /> 
                    )}

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                </div>
                <div className="max-w-[50%]">
                    <div className=" mb-6">
                        <h1 className="text-2xl font-bold text-center uppercase">{post.title}</h1>
                    </div>
                    <div className="flex justify-center items-center mb-6 px-10">
                        <div className="flex items-center border shadow-lg bg-[snow] rounded-lg p-4">
                    <div className="browser-css text-center">
                        {parse(String(post.content))}
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </Container>

    ) : null;
}