package com.olib.rss.favorite.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.olib.rss.favorite.model.OlibRssFavorite;

@Repository
public interface OlibRssFavoriteRepository extends JpaRepository<OlibRssFavorite, Integer> {

}
