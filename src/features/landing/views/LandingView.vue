<script setup lang="ts">
import HeroSection from '@/features/landing/components/HeroSection.vue'
import ArchitectureExplorer from '@/features/landing/components/ArchitectureExplorer.vue'
import BenefitsSection from '@/features/landing/components/BenefitsSection.vue'
import ComparisonSection from '@/features/landing/components/ComparisonSection.vue'
import AgentsSection from '@/features/landing/components/AgentsSection.vue'
import CtaSection from '@/features/landing/components/CtaSection.vue'
import SiteFooter from '@/features/landing/components/SiteFooter.vue'
</script>

<template>
  <main class="min-h-screen bg-surface text-on-surface font-sans">
    <HeroSection />
    <ArchitectureExplorer />
    <BenefitsSection />
    <ComparisonSection />
    <AgentsSection />
    <CtaSection />
    <SiteFooter />
  </main>
</template>
