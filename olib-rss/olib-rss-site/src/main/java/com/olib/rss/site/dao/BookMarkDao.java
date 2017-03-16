package com.olib.rss.site.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.olib.rss.site.model.BookMark;

@Repository
public interface BookMarkDao extends JpaRepository<BookMark, Integer> {

}
