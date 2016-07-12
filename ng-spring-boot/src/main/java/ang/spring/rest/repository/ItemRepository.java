package ang.spring.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ang.spring.rest.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
