import { useEffect, useState, useCallback } from "react";
import { ArticleService } from "../services/article";
import { Article } from "../models/Article";

export const useNews = () => {
  const [isLoading, setisLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleFetchArticles = useCallback(async () => {
    const response = await ArticleService.getTopHeadlines();
    if (response) {
      const { articles } = response.data;
      setArticles(articles);
    }

    setisLoading(false);
  }, []);

  useEffect(() => {
    handleFetchArticles();
  }, [handleFetchArticles]);

  return { articles, isLoading };
};
