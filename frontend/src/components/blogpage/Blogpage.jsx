import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/blogimg.png";
import img2 from "../../assets/categoryimg.png";
import img3 from "../../assets/blogone.png";
import { ArrowRight, MessageCircle,ThumbsUp  } from "lucide-react";
import {
  Row,
  Col,
  Card,
  Container,
  Badge,
  Form,
  ListGroup,
  Modal,
} from "react-bootstrap";
import logo from "../../assets/logonew.png";
import vid from "../../assets/blogvideo.mp4";
import "./Blogpage.css";



const categories = [
  "Web Development",
  "AI Web Development",
  "Dark Mode",
  "No-code/low-code",
  "JAMstack Revolution",
  "AR/VR",
  "Accessibility in Web Design",
  "5G",
  "Sports",
];

const Blogpage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [comments, setComments] = useState({}); // Store comments per post
  const [commentVisibility, setCommentVisibility] = useState(false); // Control modal visibility
  const [activePostId, setActivePostId] = useState(null); // Track which post's comments are being shown
  const [posts, setPosts] = useState([]); // State to hold posts fetched from MongoDB
  const [loading, setLoading] = useState(true); // Initialize loading state
  const contentSectionRef = useRef(null); // Declare contentSectionRef here
  const keyPointsRef = useRef(null);
  const [likes, setLikes] = useState({}); // State to store likes for each post

  const generateSlug = (title) => {
    return encodeURIComponent(title.replace(/\s+/g, "-").replace(/[^\w\-]/g, ""));
  };
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  useEffect(() => {
    // Fetch posts from MongoDB
    fetch("http://localhost:5001/getUsers")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevState) =>
      prevState.includes(category)
        ? prevState.filter((c) => c !== category)
        : [...prevState, category]
    );
  };

  const handleCommentSubmit = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const handleOpenComments = (postId) => {
    setActivePostId(postId);
    setCommentVisibility(true);
  };

  const handleCloseComments = () => {
    setCommentVisibility(false);
    setActivePostId(null);
  };

  const filteredPosts = selectedCategories.length
    ? posts.filter((post) => selectedCategories.includes(post.category))
    : posts;

    const handleLikeClick = (postId) => {
      setLikes((prevLikes) => {
        const newLikes = { ...prevLikes };
        newLikes[postId] = (newLikes[postId] || 0) + 1;
        return newLikes;
      });
    };


  return (
    <>
      {/* <video className="vid" src={vid} autoPlay loop muted /> */}
      <video
        className="vid"
        src={vid}
        autoPlay
        loop
        muted
        data-testid="blog-video"
      />
      <Container fluid className="mt-4" style={{ marginBottom: "20px" }}>
        <Container className="text-center mb-5" style={{ maxWidth: "73rem" }}>
          <Row className="align-items-center">
            {/* Left Column: Text */}
            <Badge pill bg="light" text="dark" className="px-3 py-1 mb-3">
              OUR BLOG
            </Badge>
            <Col md={8} className="text-left">
              <h1 className="display-6 tex font-weight text-center">
                <b> Welcome to our blog page</b>, where you’ll find a curated
                collection of insightful articles across a variety of topics
              </h1>
            </Col>

            {/* Right Column: Image */}
            <Col md={4} className="text-right">
              <img
                src={img3}
                alt="Blog illustration"
                className="blogone"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={2} className="mb-4">
            <div className="text-center">
              <h5 className="mb-4">
                Categories{" "}
                <img
                  src={img2}
                  alt="Category icon"
                  style={{ height: "17px", cursor: "pointer" }}
                  onClick={() => setShowCategories(!showCategories)}
                />
              </h5>
              {showCategories && (
                <ListGroup>
                  {categories.map((category) => (
                    <ListGroup.Item key={category}>
                      <Form.Check
                        type="checkbox"
                        label={category}
                        onChange={() => handleCategoryChange(category)}
                        checked={selectedCategories.includes(category)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <input
                type="text"
                placeholder="Type Here.."
                style={{
                  borderRadius: "20px",
                  border: "2px solid gray",
                  padding: "5px",
                }}
              />{" "}
              <NavLink>
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: "30px",
                    marginBottom: "50px",
                    marginTop: "50px",
                  }}
                />
              </NavLink>
            </div>
          </Col>

          <Col md={9}>
            <Row className="g-4">
              {filteredPosts.map((post) => (
                <Col md={6} lg={4} key={post.title}>
                  <Card
                    className="card-hover abc"
                    style={{ borderRadius: "20px", height: "97%" }}
                  >
                    <Card.Img
                      variant="top"
                      src={post.poster}
                      className="aspect-ratio-16/9"
                    />
                    <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Text className="text-muted text-xs">
                          {post.category}
                        </Card.Text>
                        <div
                          onClick={() => handleLikeClick(post.title)}
                          style={{ cursor: "pointer", display: "flex" }}
                        >
                          <ThumbsUp size={24} style={{ marginRight: "5px" }} />
                          <span>{likes[post.title] || 0}</span>
                        </div>
                      </div>
                    
                      <Card.Title className="font-weight-bold">
                        {post.title}
                      </Card.Title>
                      <Card.Text>{post.description}</Card.Text>
                      <div className="d-flex">
                        <p style={{ fontWeight: "bold" }}>Publish Date:</p>
                        <p style={{ marginLeft: "5px" }}>{post.date}</p>
                      </div>
                    </Card.Body>

                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ padding: "10px 15px", marginBottom: "20px" }}
                    >
                      <NavLink
                        to={`/blog/${(post.title)}`}
                        style={{ width: "77%" }}
                      >
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold read-more-btn"
                          onClick={() => {
                            handleHeaderClick();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          style={{
                            width: "100%",
                            borderRadius: "20px",
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 arrow-right" />
                        </button>
                      </NavLink>

                      <div
                        className="comment-icon-wrapper d-flex align-items-center justify-content-center"
                        style={{ width: "20%" }}
                      >
                        <button
                          onClick={() => handleOpenComments(post.title)}
                          className="comment-icon-btn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            borderRadius: "20px",
                            padding: "5px",
                            marginTop: "-17px",
                            height: "42px",
                          }}
                        >
                          <MessageCircle
                            size={24}
                            style={{ marginBottom: "3px" }}
                          />
                          <span
                            className="comment-count"
                            style={{
                              marginLeft: "5px",
                              fontWeight: "bold",
                              marginBottom: "3px",
                            }}
                          >
                            {comments[post.title]?.length || 0}
                          </span>
                        </button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Comment Modal */}
        <Modal
          show={commentVisibility}
          onHide={handleCloseComments}
          className="custom-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="comment-box">
              {comments[activePostId]?.length > 0 ? (
                comments[activePostId].map((comment, index) => (
                  <div key={index} className="comment-item">
                    <div className="comment-icon">{index + 1}</div>
                    <div className="comment-text">{comment}</div>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.elements.comment.value;
                if (comment) {
                  handleCommentSubmit(activePostId, comment);
                  e.target.reset();
                }
              }}
            >
              <Form.Group controlId="comment">
                <Form.Control type="text" placeholder="Write a comment..." />
              </Form.Group>
              <button type="submit" className="submit-btn mt-2">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
    
  );

};

export default Blogpage;
