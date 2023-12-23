﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI;
using TaskManagerAPI.Data;

namespace TaskManagerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefaTiposController : ControllerBase
    {
        private readonly DataContext _context;

        public TarefaTiposController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TarefaTipos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TarefaTipo>>> GetTarefasTipo()
        {
            return await _context.TarefasTipo.ToListAsync();
        }

        // GET: api/TarefaTipos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TarefaTipo>> GetTarefaTipo(int id)
        {
            var tarefaTipo = await _context.TarefasTipo.FindAsync(id);

            if (tarefaTipo == null)
            {
                return NotFound();
            }

            return tarefaTipo;
        }

        // PUT: api/TarefaTipos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarefaTipo(int id, TarefaTipo tarefaTipo)
        {
            if (id != tarefaTipo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tarefaTipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TarefaTipoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TarefaTipos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TarefaTipo>> PostTarefaTipo(TarefaTipo tarefaTipo)
        {
            _context.TarefasTipo.Add(tarefaTipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTarefaTipo", new { id = tarefaTipo.Id }, tarefaTipo);
        }

        // DELETE: api/TarefaTipos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarefaTipo(int id)
        {
            var tarefaTipo = await _context.TarefasTipo.FindAsync(id);
            if (tarefaTipo == null)
            {
                return NotFound();
            }

            _context.TarefasTipo.Remove(tarefaTipo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TarefaTipoExists(int id)
        {
            return _context.TarefasTipo.Any(e => e.Id == id);
        }
    }
}
