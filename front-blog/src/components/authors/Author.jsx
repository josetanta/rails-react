import React, { Fragment, useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

// BEGIN Components
import { ArticleForm } from "../articles/ArticleForm";
// END

const API_URL = process.env.REACT_APP_API;

export const Author = () => {
  const { author_id } = useParams();
  const [author, setAuthor] = useState({});
  const [authorArticles, setAuthorArticles] = useState([]);

  const getArticleOfAuthor = async () => {
    var res = await fetch(`${API_URL}/authors/${author_id}/articles`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    var data = await res.json();
    setAuthorArticles(data.data.articles);
  };

  useEffect(() => {
    const getAuthor = async () => {
      const res = await fetch(`${API_URL}/authors/${author_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setAuthor(data.data.author);
    };
    getAuthor();
    getArticleOfAuthor();
  }, [API_URL, author_id]);

  return (
    <Fragment>
      <Row className="my-3">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <Card.Title className="text-info">{author.name}</Card.Title>
                  <Card.Text>{author.email}</Card.Text>
                </Col>
                <Col sm={6}>
                  <div className="text-muted">
                    <small>Articulos publicados: </small>
                    <div className="badge badge-primary">
                      {authorArticles.length}
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="border form-group my-4">
            <div className="p-2">
              <h5>Crear un Articulo</h5>
              <ArticleForm getArticleOfAuthor={getArticleOfAuthor} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          {authorArticles.length > 0 ? (
            authorArticles.map((article, index) => (
              <Card
                style={{ width: "18rem" }}
                className="article-hover shadow mb-3"
                key={index}
              >
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.body}</Card.Text>
                  <Link className="card-link" to={`/articles/${article.id}`}>
                    Article Link
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h2 className="text-muted">No tiene Articulos</h2>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};
