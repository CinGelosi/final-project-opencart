class Sections{
    elements ={
        dropdownSections: ()=> cy.get('.navbar-nav .dropdown'),
        productListItems: () => cy.get('.dropdown-inner .list-unstyled > li')
    }

    hoverDropdownSection(section){
        this.elements.dropdownSections().contains(section).trigger('mouseover')        
    }

    clickAvailableProduct() {
        this.elements.productListItems().each(($product) => {
                if (!$product.text().includes('(0)')) {
                    cy.wrap($product).click({ force: true });
                    return false;  // Detiene el ciclo en el primer producto disponible encontrado
                }
        });
        
    }
}

module.exports = new Sections();