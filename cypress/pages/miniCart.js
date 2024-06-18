class MiniCart{
    elements ={ // objeto
        miniCart: ()=> cy.get('#cart-total'),
        itemsOnCartContainer: ()=> cy.get('.col-sm-3 .pull-right'), 
        viewCartButton: ()=> cy.get('.text-right .fa-shopping-cart'),
        checkoutButton: ()=> cy.get('.text-right .fa-share'),
        tableCart: ()=> cy.get('.table-bordered'),
        crossMiniCart: ()=> cy.get('.btn-danger'),     
    }

    clickMiniCartButton(){
        this.elements.miniCart().click()
    }

    cartBeVisible(){
        return this.elements.itemsOnCartContainer()
    }

    findItemInCart(item){
        return this.elements.itemsOnCartContainer().contains(item)
    }

    viewCartButton(){
        return this.elements.viewCartButton()
    }

    checkoutButton(){
        return this.elements.checkoutButton()
    }

    tableCart(){
        return this.elements.tableCart()
    }

    deleteItemMiniCart(){
        this.elements.crossMiniCart().click()
    }

    clickOnCheckoutButton(){
        this.elements.checkoutButton().click()
    }
}

module.exports = new MiniCart();
