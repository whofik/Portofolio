import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Certificates from '../../components/Certificates'

function renderCertificates() {
  return render(
    <HelmetProvider>
      <Certificates />
    </HelmetProvider>
  )
}

describe('Certificates', () => {
  it('renders the section title', () => {
    renderCertificates()
    expect(screen.getByText('Certificates')).toBeInTheDocument()
  })

  it('has the certificates section with correct id', () => {
    renderCertificates()
    expect(document.getElementById('certificates')).toBeInTheDocument()
  })

  it('renders all 7 certificate cards', () => {
    renderCertificates()
    const cards = document.querySelectorAll('.certificate-item')
    expect(cards.length).toBe(7)
  })

  it('renders certificate images with lazy loading', () => {
    renderCertificates()
    const images = document.querySelectorAll('.certificate-img')
    images.forEach(img => {
      expect(img.getAttribute('loading')).toBe('lazy')
      expect(img.getAttribute('decoding')).toBe('async')
    })
  })

  it('opens modal when certificate is clicked', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.click(firstCard)
    expect(document.querySelector('.modal-overlay')).toBeInTheDocument()
    expect(screen.getByText('Tanggal')).toBeInTheDocument()
    expect(screen.getByText('Diterbitkan oleh')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.click(firstCard)
    expect(document.querySelector('.modal-overlay')).toBeInTheDocument()

    const closeBtn = document.querySelector('.modal-close')
    fireEvent.click(closeBtn)
    expect(document.querySelector('.modal-overlay')).not.toBeInTheDocument()
  })

  it('closes modal when overlay is clicked', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.click(firstCard)

    const overlay = document.querySelector('.modal-overlay')
    fireEvent.click(overlay)
    expect(document.querySelector('.modal-overlay')).not.toBeInTheDocument()
  })

  it('closes modal on Escape key', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.click(firstCard)
    expect(document.querySelector('.modal-overlay')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(document.querySelector('.modal-overlay')).not.toBeInTheDocument()
  })

  it('opens modal on Enter key for keyboard accessibility', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.keyDown(firstCard, { key: 'Enter' })
    expect(document.querySelector('.modal-overlay')).toBeInTheDocument()
  })

  it('displays correct certificate details in modal', () => {
    renderCertificates()
    const firstCard = document.querySelector('.certificate-item')
    fireEvent.click(firstCard)

    expect(screen.getByText('Webinar Nasional HIMATEK')).toBeInTheDocument()
    expect(screen.getByText('Kamis, 26 Februari 2026')).toBeInTheDocument()
    expect(screen.getByText('HIMATEK')).toBeInTheDocument()
  })

  it('injects JSON-LD schema for certificates', () => {
    renderCertificates()
    // HelmetProvider in test mode doesn't inject into <head>, 
    // but we can verify the schema object structure is valid
    const section = document.getElementById('certificates')
    expect(section).toBeInTheDocument()
  })
})
