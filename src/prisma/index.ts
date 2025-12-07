// src/prisma/index.ts
// Re-export Prisma client types and enums for easier imports

export { PrismaClient } from '@prisma/client';
export { PrismaService } from './prisma.service';

// Re-export all enums from Prisma client
export {
  // User & Profile
  ProfileStatus,
  Gender,

  // Provider
  VerificationStatus,
  ProviderUserRole,

  // Request Statuses
  RequestStatus,
  PaymentStatus,
  InvoiceStatus,

  // Priority
  Priority,

  // Payment & Billing
  PaymentMethodType,
  DiscountType,
  BillingCycle,
  Currency,

  // SLA & Routing
  RequestType,
  RoutingStrategy,

  // Dispute & Refund
  DisputeStatus,
  RefundStatus,

  // Notification & Messages
  NotificationChannel,
  MessageType,

  // Job Queue
  JobStatus,
  JobType,

  // Hearing Types
  HearingType,

  // Address Types
  AddressType,

  // Ticket & Support
  TicketCategory,
  TicketStatus,

  // Collaborator
  CollaboratorRole,
  CollaboratorStatus,

  // Log Levels
  LogLevel,

  // Report Types
  ReportType,

  // SLA Status
  SLAStatus,

  // Transaction Types
  TransactionType,

  // Quote Status
  QuoteStatus,

  // System Message Types
  SystemMessageType,
  Severity,
} from '@prisma/client';
