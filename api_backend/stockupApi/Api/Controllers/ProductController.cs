using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using stockupApi.Application.services;


namespace stockupApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDto.ProductCreateDto product)
        {            
            try
            {
                var createdProduct = await _productService.CreateProductAsync(product);
                return CreatedAtAction(nameof(GetProductById), new { productId = createdProduct.Id }, createdProduct);
            }
            catch (Exception ex)
            {                return BadRequest(ex.Message);
            }   
        }
        [HttpGet("{productId}")]
        public async Task<IActionResult> GetProductById(Guid productId)
        {            
            try
            {
                var product = await _productService.GetProductByIdAsync(productId);
                return Ok(product);
            }
            catch (Exception ex)
            {                return NotFound(ex.Message);
            }   
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {            
            try
            {
                var products = await _productService.GetAllProductsAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{productId}")]
        public async Task<IActionResult> UpdateProduct(Guid productId, [FromBody] ProductDto.ProductUpdateDto product)
        {            
            try
            {                
                var updatedProduct = await _productService.UpdateProductAsync(productId, product);
                return Ok(updatedProduct);
            }
            catch (Exception ex)
            {                
                if (ex.Message.Contains("Produto não encontrado"))
                    return NotFound(ex.Message);
                else
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{productId}")]
        public async Task<IActionResult> DeleteProduct(Guid productId)
        {            
            try
            {                
                var result = await _productService.DeleteProductAsync(productId);
                if (result)                    
                    return NoContent();
                else                    
                return NotFound("Produto não encontrado.");
            }
            catch (Exception ex)
            {                
                return BadRequest(ex.Message);
            }
        }
    }
}