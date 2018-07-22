package com.olib.rss.bookmark.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.olib.rss.bookmark.model.BookMark;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMark, Integer> {

}
